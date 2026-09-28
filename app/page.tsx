import { Suspense } from "react";
import type { Test } from "@/types/tests";
import testsData from "@/lib/tests.json";
import PageHeader from "@/components/tests/PageHeader";
import MyTestsView from "@/components/tests/MyTestsView";

const tests = testsData as Test[];

export default function Home() {
  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 lg:gap-8 lg:p-8">
      <PageHeader
        title="My Tests"
        subtitle="All the tests you've created, across your classes."
      />
      <Suspense>
        <MyTestsView tests={tests} />
      </Suspense>
    </div>
  );
}
