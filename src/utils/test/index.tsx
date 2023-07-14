import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const renderWithDeps = (component: ReactNode) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/">{component}</BrowserRouter>
    </QueryClientProvider>,
  );
};
