import { lazy, Suspense } from "react";
import Loading from "./Loading";

export default function SuspenseWrap({ path }) {
  const ComponentLazy = lazy(() => import(`..${path}`));

  return (
    <Suspense fallback={<Loading />}>
      <ComponentLazy />
    </Suspense>
  );
}
