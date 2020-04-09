import React, { useState } from 'react'

import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
} from '@elastic/eui'

import {
  EuiIcon,
  EuiHeaderSection,
  EuiHeaderSectionItemButton,
} from '@elastic/eui'

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageSideBar,
  EuiTitle,
} from '@elastic/eui'

import { EuiFlexGroup, EuiFlexItem, EuiSpacer } from '@elastic/eui'

import { css } from '@emotion/core'

interface LandingPageProps {}

export default function LangdingPage(props: LandingPageProps) {
  return (
    <React.Fragment>
      <EuiHeader>
        <EuiHeaderSection side="left">
          <EuiHeaderLink>
            <EuiHeaderLink href="#" isActive={true}>
              Landing
            </EuiHeaderLink>
            <EuiHeaderLink href="#">Plans</EuiHeaderLink>
            <EuiHeaderLink href="#">Blog</EuiHeaderLink>
            <EuiHeaderLink href="#">About</EuiHeaderLink>
          </EuiHeaderLink>
        </EuiHeaderSection>
        <EuiHeaderSection side="right">
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
                <h1>Page title</h1>
              </EuiTitle>
            </EuiPageHeaderSection>
            <EuiPageHeaderSection>Page abilities</EuiPageHeaderSection>
          </EuiPageHeader>
          <EuiPageContent>
            <EuiPageContentHeader>
              <EuiPageContentHeaderSection>
                <EuiTitle>
                  <h2>Content title</h2>
                </EuiTitle>
              </EuiPageContentHeaderSection>
              <EuiPageContentHeaderSection>
                Content abilities
              </EuiPageContentHeaderSection>
            </EuiPageContentHeader>
            <EuiPageContentBody>Content body</EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </React.Fragment>
  )
}
