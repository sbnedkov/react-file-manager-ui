import React from "react";
import SideBar from "./SideBar";
import Body from "./Body";

export default function MiddleArea({ collapsed, setCollapsed, structure, currentPath, setCurrentPath, openFile, reload, selection, setSelection, labels, loading, enabledFeatures }) {
  return (
    <div className='FileManager-MiddleArea'>
      <SideBar
        labels={labels} loading={loading} structure={structure}
        currentPath={currentPath} setCurrentPath={setCurrentPath}
        collapsed={collapsed} setCollapsed={setCollapsed} enabledFeatures={enabledFeatures}
      />
      <Body
        structure={structure}
        currentPath={currentPath} setCurrentPath={setCurrentPath}
        openFile={openFile} reload={reload} labels={labels} loading={loading}
        selection={selection} setSelection={setSelection} enabledFeatures={enabledFeatures}
      />
    </div>
  );
}
