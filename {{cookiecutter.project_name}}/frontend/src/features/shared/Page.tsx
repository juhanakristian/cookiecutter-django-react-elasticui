import React from "react";

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
  );
}
