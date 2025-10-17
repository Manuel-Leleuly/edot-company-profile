import { Mosaic } from "react-loading-indicators";

export default function RootLoading() {
  return (
    <div className="relative top-0 bottom-0 left-0 right-0 bg-white flex items-center justify-center">
      <Mosaic size="large" />
    </div>
  );
}
