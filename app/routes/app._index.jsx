import { useEffect } from "react";
import { json } from "@remix-run/node";
import { useActionData, useNavigation, useSubmit } from "@remix-run/react";
import {
  Page,
  Grid,
  Card,
  Layout,
  Text,
  Button,
  BlockStack,
  Box,
  List,
  Link,
  InlineStack,
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

export default function Index() {
  return (
    <Page fullWidth>
      <ui-title-bar title="Remix sample app">
      </ui-title-bar>
      <Grid>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
           <Link monochrome url="/app/qrcode">
            <Card title="Sales" sectioned>
              <p>Genarate Qrcodes</p>
            </Card>
          </Link>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <Link monochrome url="/app">
            <Card title="Sales" sectioned>
              <p></p>
            </Card>
          </Link>
        </Grid.Cell>
      </Grid>
    </Page>
  );
}
