import { useEffect, useRef, useState, useId, useCallback } from 'react';
import styles from '@/styles/Page.module.css';

/**
 * Select-Only Combobox pattern
 * https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
 */
export default function Dropdown({ label, options, value, onChange, ariaLabel }) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [typeahead, setTypeahead] = useState('');

  const btnRef = useRef(null);
  const listRef = useRef(null);
  const typeaheadTimer = useRef(null);

  const listId = useId();
  const labelId = useId();
  const optionIdPrefix = useId();

  // Опция "Не выбрано" для возможности снятия выбора (нативно у combobox нет toggle)
  const allOptions = [{ id: '__none__', name: label }, ...options];

  const selected = options.find((o) => o.id === value);
  const displayText = selected ? selected.name : label;

  const getOptionId = (id) => `${optionIdPrefix}-opt-${id}`;

  const openList = useCallback((focusFirstOrSelected = true) => {
    setOpen(true);
    if (focusFirstOrSelected) {
      const selIdx = allOptions.findIndex((o) => o.id === value);
      const idx = selIdx >= 0 ? selIdx : 0;
      setActiveId(allOptions[idx].id);
    }
  }, [allOptions, value]);

  const closeList = useCallback((returnFocus = true) => {
    setOpen(false);
    setActiveId(null);
    setTypeahead('');
    if (returnFocus) btnRef.current?.focus();
  }, []);

  // Клик вне закрывает
  useEffect(() => {
    if (!open) return;
    const onDocDown = (e) => {
      if (!btnRef.current?.contains(e.target) && !listRef.current?.contains(e.target)) {
        closeList(false);
      }
    };
    document.addEventListener('mousedown', onDocDown);
    return () => document.removeEventListener('mousedown', onDocDown);
  }, [open, closeList]);

  // Прокрутка к активной опции (для aria-activedescendant)
  useEffect(() => {
    if (!open || !activeId || !listRef.current) return;
    const el = listRef.current.querySelector(`#${CSS.escape(getOptionId(activeId))}`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeId, open]);

  const moveActive = (delta) => {
    const idx = allOptions.findIndex((o) => o.id === activeId);
    const nextIdx = (idx + delta + allOptions.length) % allOptions.length;
    setActiveId(allOptions[nextIdx].id);
  };

  const commitSelection = (opt) => {
    onChange(opt.id === '__none__' ? null : opt.id);
    closeList(true);
  };

  // Typeahead: поиск по первой(-ым) буквам — требование APG
  const handleTypeahead = (char) => {
    clearTimeout(typeaheadTimer.current);
    const next = (typeahead + char).toLowerCase();
    setTypeahead(next);
    typeaheadTimer.current = setTimeout(() => setTypeahead(''), 500);

    const match = allOptions.find((o) => o.name.toLowerCase().startsWith(next));
    if (match) {
      if (!open) openList(false);
      setActiveId(match.id);
    }
  };

  const handleKeyDown = (e) => {
    const { key, altKey } = e;

    // Закрыто → открываем по стрелкам/Enter/Space/буквам
    if (!open) {
      if (key === 'ArrowDown' || key === 'ArrowUp' || key === 'Enter' || key === ' ') {
        e.preventDefault();
        openList(true);
        return;
      }
      if (altKey && key === 'ArrowDown') {
        e.preventDefault();
        openList(true);
        return;
      }
      if (key.length === 1 && /\S/.test(key)) {
        e.preventDefault();
        openList(false);
        handleTypeahead(key);
        return;
      }
      return;
    }

    // Открыто
    switch (key) {
      case 'Escape':
        e.preventDefault();
        closeList(true);
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (altKey) break;
        moveActive(1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        moveActive(-1);
        break;
      case 'Home':
        e.preventDefault();
        setActiveId(allOptions[0].id);
        break;
      case 'End':
        e.preventDefault();
        setActiveId(allOptions[allOptions.length - 1].id);
        break;
      case 'Enter':
      case ' ': {
        e.preventDefault();
        const opt = allOptions.find((o) => o.id === activeId);
        if (opt) commitSelection(opt);
        break;
      }
      case 'Tab':
        // Закрываем, но НЕ перехватываем Tab — фокус уйдёт дальше естественно
        closeList(false);
        break;
      default:
        if (key.length === 1 && /\S/.test(key)) {
          e.preventDefault();
          handleTypeahead(key);
        }
    }
  };

  return (
    <div className={styles.dropdown}>
      <span id={labelId} className="sr-only">{ariaLabel || label}</span>
      <button
        ref={btnRef}
        type="button"
        className={styles.filterBtn}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={labelId}
        aria-activedescendant={open && activeId ? getOptionId(activeId) : undefined}
        onClick={() => (open ? closeList(false) : openList(true))}
        onKeyDown={handleKeyDown}
      >
        <span>{displayText}</span>
        <svg className={styles.filterArrow} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M3 5 L7 9 L11 5" stroke="currentColor" strokeWidth="1.5" fill="none"
                strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <ul
        ref={listRef}
        id={listId}
        role="listbox"
        aria-labelledby={labelId}
        tabIndex={-1}
        className={styles.dropdownList}
        hidden={!open}
      >
        {allOptions.map((opt) => {
          const isSelected =
            opt.id === '__none__' ? value === null : opt.id === value;
          const isActive = opt.id === activeId;
          return (
            <li
              key={opt.id}
              id={getOptionId(opt.id)}
              role="option"
              aria-selected={isSelected}
              className={`${styles.dropdownOption} ${isActive ? styles.dropdownOptionActive : ''}`}
              onClick={() => commitSelection(opt)}
              onMouseEnter={() => setActiveId(opt.id)}
            >
              {opt.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}