import { CardBody, CardHeader, Divider } from "@heroui/react";

export default function ChatPage() {
  return (
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Chat
      </CardHeader>
      <Divider />
      <CardBody>Chat here</CardBody>
    </>
  );
}
