import React from "react";

import { EuiHeader, EuiHeaderLink } from "@elastic/eui";

import {
  EuiIcon,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
} from "@elastic/eui";

import {
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
} from "@elastic/eui";

interface PageProps {
  title: string;
  children: React.ReactNode;
}

export default function Page(props: PageProps) {
  return (
    <div>
      <EuiHeader position="fixed">
        <EuiHeaderSection grow={false}>
          <EuiHeaderSectionItem border="left">
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
              <EuiHeaderLink href="#" isActive={true}>
                Landing
              </EuiHeaderLink>
              <EuiHeaderLink href="#">Plans</EuiHeaderLink>
              <EuiHeaderLink href="#">Blog</EuiHeaderLink>
              <EuiHeaderLink href="#">About</EuiHeaderLink>
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
      <EuiPage>
        <EuiPageBody component="div">
          <EuiPageHeader>
            <EuiPageHeaderSection>
              <EuiTitle size="l">
                <h1>{props.title}</h1>
              </EuiTitle>
            </EuiPageHeaderSection>
          </EuiPageHeader>
          {props.children}
        </EuiPageBody>
      </EuiPage>
    </div>
  );
}
