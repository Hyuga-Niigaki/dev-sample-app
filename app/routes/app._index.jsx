import { useEffect } from "react";
import { json } from "@remix-run/node";
import {
  Form,
  useActionData,
  useNavigation,
  useSubmit,
  useLoaderData,
} from "@remix-run/react";
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
  const { admin } = await authenticate.admin(request);
  const response = await admin.graphql(
    `#graphql
      query{
shop {
        name
        primaryDomain {
          url
        }
      }
}`
  );

  return await response.json();
};

export default function Index() {
  const loaderData = useLoaderData();
  console.log("loaderData:", loaderData.data.shop.primaryDomain?.url); // Get domain

  return (
    <Page fullWidth>
      <ui-title-bar title="Remix sample app">
      </ui-title-bar>
      <Grid>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
           <Link monochrome url="/app/qrcode">
            <Card sectioned>
              <p>Genarate Qrcodes</p>
            </Card>
          </Link>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <Link monochrome url="shopify:admin/settings/payments/customizations">
            <Card sectioned>
              <p>Generate Payment Customization</p>
            </Card>
          </Link>
        </Grid.Cell>
      </Grid>
    </Page>
  );
}
