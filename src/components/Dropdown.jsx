import { useEffect, useRef, useState, useId } from 'react';
import styles from '@/styles/Page.module.css';

export default function Dropdown({ label, options, value, onChange, ariaLabel }) {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const btnRef = useRef(null);
  const listRef = useRef(null);
  const listId = useId();
  const labelId = useId();

  const selected = options.find(o => o.id === value);
  const displayText = selected ? selected.name : label;

  useEffect(() => {
    if (!open) return;
    const onDocDown = (e) => {
      if (!btnRef.current?.contains(e.target) && !listRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocDown);
    return () => document.removeEventListener('mousedown', onDocDown);
  }, [open]);

  useEffect(() => {
    if (open && listRef.current) {
      const selIdx = options.findIndex(o => o.id === value);
      const idx = selIdx >= 0 ? selIdx : 0;
      setActiveIdx(idx);
      const items = listRef.current.querySelectorAll('[role="option"]');
      items[idx]?.focus();
    }
  }, [open]);

  const handleBtnKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault(); setOpen(true);
    }
  };

  const handleListKey = (e) => {
    const items = listRef.current.querySelectorAll('[role="option"]');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const n = (activeIdx + 1) % options.length;
      setActiveIdx(n); items[n]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const p = (activeIdx - 1 + options.length) % options.length;
      setActiveIdx(p); items[p]?.focus();
    } else if (e.key === 'Escape') {
      e.preventDefault(); setOpen(false); btnRef.current?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault(); setActiveIdx(0); items[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      const last = options.length - 1;
      setActiveIdx(last); items[last]?.focus();
    } else if (e.key === 'Tab') {
      setOpen(false);
    }
  };

  const select = (opt) => {
    onChange(opt.id === value ? null : opt.id);
    setOpen(false);
    btnRef.current?.focus();
  };

  return (
    <div className={styles.dropdown}>
      <span id={labelId} className="sr-only">{ariaLabel || label}</span>
      <button
        ref={btnRef}
        type="button"
        className={styles.filterBtn}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={labelId}
        onClick={() => setOpen(o => !o)}
        onKeyDown={handleBtnKey}
      >
        <span>{displayText}</span>
        <svg className={styles.filterArrow} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M3 5 L7 9 L11 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          aria-labelledby={labelId}
          className={styles.dropdownList}
          onKeyDown={handleListKey}
        >
          {options.map((opt) => (
            <li
              key={opt.id}
              role="option"
              tabIndex={-1}
              aria-selected={opt.id === value}
              className={styles.dropdownOption}
              onClick={() => select(opt)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(opt); } }}
            >
              {opt.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}