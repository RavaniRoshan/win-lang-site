"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import styles from "../../app/page.module.css";
import { siteNav } from "@/content/site";

export function NavLinks() {
  return (
    <nav className={styles.navLinks} aria-label="Primary">
      {siteNav.map((item) => (
        item.subLinks ? (
          <NavItemWithDropdown key={item.href} item={item} />
        ) : (
          <Link key={item.href} href={item.href} className={styles.navItem}>
            {item.label}
          </Link>
        )
      ))}
    </nav>
  );
}

function NavItemWithDropdown({ item }: { item: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={styles.navItemWrapper}
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={styles.navItem}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {item.label}
        <svg
          className={`${styles.navChevron} ${isOpen ? styles.navChevronOpen : ''}`}
          width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className={styles.navDropdown}>
          <div className={styles.navDropdownInner}>
            {item.subLinks.map((sub: any) => (
              <Link key={sub.href} href={sub.href} className={styles.navDropdownItem} onClick={() => setIsOpen(false)}>
                <div className={styles.navDropdownLabel}>{sub.label}</div>
                {sub.description && <div className={styles.navDropdownDesc}>{sub.description}</div>}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
