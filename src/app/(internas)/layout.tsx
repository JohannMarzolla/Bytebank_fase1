import LayoutLogado from "../components/LayoutLogado";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <LayoutLogado>{children}</LayoutLogado>;
}
