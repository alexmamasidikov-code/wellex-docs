import React from 'react';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import IconMenu from '@theme/Icon/Menu';

export default function MobileSidebarToggle() {
  const mobileSidebar = useNavbarMobileSidebar();
  const toggle = mobileSidebar?.toggle ?? (() => {});
  const shown = mobileSidebar?.shown ?? false;

  return (
    <button
      onClick={toggle}
      aria-label={translate({
        id: 'theme.docs.sidebar.toggleSidebarButtonAriaLabel',
        message: 'Toggle navigation bar',
      })}
      aria-expanded={shown}
      className="navbar__toggle clean-btn"
      type="button"
      style={{display: 'flex'}}>
      <IconMenu />
    </button>
  );
}
