export default function Loading() {
  return <p>Loading</p>;
}

/**
 *
 * Streaming SSR -> Partially Read/Write data + SSR -> Render component from server partially
 * Same request can bring data partially, keeping connection open until all the data is returned
 */
