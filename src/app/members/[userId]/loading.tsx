import { Spinner } from "@heroui/react";

export default function MemberLoading() {
  return (
    <div className="flex justify-center items-center vertical-center">
      <Spinner label="loading..." color="secondary" labelColor="secondary" />
    </div>
  );
}
