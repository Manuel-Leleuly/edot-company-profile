"use client";

export default function RootError() {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col text-center items-center justify-center gap-2">
      <p>
        I am sorry, but the page that you are looking for is either not found or
        broken
      </p>
      <p>Please refresh the page or contact the admin</p>
    </div>
  );
}
