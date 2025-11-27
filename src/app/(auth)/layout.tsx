interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <div>Auth</div>
      <div>{children}</div>
    </div>
  );
}
