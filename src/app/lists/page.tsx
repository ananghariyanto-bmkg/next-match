import {
  fetchCurrentUserLikeIds,
  fetchLikedMembers,
} from "@/app/actions/likeActions";
import ListsTab from "@/app/lists/ListsTab";

export default async function ListsPage({
  searchParams,
}: {
  searchParams: { type: string };
}) {
  const likeIds = await fetchCurrentUserLikeIds();
  const members = await fetchLikedMembers(searchParams.type);

  return (
    <div>
      <ListsTab members={members} likeIds={likeIds} />
    </div>
  );
}
