import { useRouter } from "./hooks/UseRouter";
import { Layout } from "./layouts/MainLayout";
import { getRouteConfig } from "./routes/routes";

export const App = () => {
  const { currentPath, navigate } = useRouter();
  const routeConfig = getRouteConfig(currentPath);
  const PageComponent = routeConfig.component;

  return (
    <Layout currentPath={currentPath} navigate={navigate}>
      <PageComponent />
    </Layout>
  );
};
