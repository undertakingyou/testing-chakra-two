import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { DocumentInfo } from "./DocumentInfo";

describe("DocumentInfo", () => {
    const { getByText } = render(<DocumentInfo />);

    expect(getByText("Document 1")).toBeInTheDocument();
});

