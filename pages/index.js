import { SSRProvider } from "@react-aria/ssr";
import { useId } from "@react-aria/utils";

export default function Home() {
  const elementId = useId();

  return <SSRProvider>{elementId}</SSRProvider>;
}
