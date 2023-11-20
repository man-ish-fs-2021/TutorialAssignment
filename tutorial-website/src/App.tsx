import { useState } from "react";
import "./App.css";
import { CategoryPills } from "./component";
import { categories } from "./data";
import { PageHeader, Sidebar, SubjectPage } from "./pages";
import SidebarPorvider from "./context/SidebarContext";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <SidebarPorvider>
      <div className="main-container max-h-screen flex flex-col">
        <PageHeader />
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar />
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4">
              <CategoryPills
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
                categories={categories}
              />
            </div>
            <SubjectPage />
          </div>
        </div>
      </div>
    </SidebarPorvider>
  );
}

export default App;
