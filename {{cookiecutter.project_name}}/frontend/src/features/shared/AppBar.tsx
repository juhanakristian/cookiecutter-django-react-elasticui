import React from "react";

import { EuiHeader, EuiHeaderLink } from "@elastic/eui";

import {
  EuiIcon,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
} from "@elastic/eui";

import { EuiCustomHeaderLink } from "./EuiCustomLink";

export default function AppBar() {
  return (
    <EuiHeader position="fixed">
      <EuiHeaderSection grow={false}>
        <EuiHeaderSectionItem border="right">
          <EuiHeaderLogo
            iconType="logoKibana"
            href="#"
            aria-label="Go to home page"
          />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
      <EuiHeaderSection side="right">
        <EuiHeaderSectionItem border="left">
          <EuiHeaderLink>
            <EuiCustomHeaderLink to="/">Home</EuiCustomHeaderLink>
            <EuiCustomHeaderLink to="/blog">Blog</EuiCustomHeaderLink>
            <EuiCustomHeaderLink to="/about">About</EuiCustomHeaderLink>
          </EuiHeaderLink>
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItemButton
          aria-controls="keyPadMenu"
          aria-expanded={false}
          aria-haspopup="true"
          aria-label="Apps menu with 1 new app"
          onClick={() => {}}
        >
          <EuiIcon type="apps" size="m" />
        </EuiHeaderSectionItemButton>
      </EuiHeaderSection>
    </EuiHeader>
  );
}
