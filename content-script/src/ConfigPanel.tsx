import { useEffect, useState } from "react";
import Select from "react-select";

export default function ConfigPanel({ getConfigObject }: any) {
  const [collapseStringsAfter, setCollapseStringsAfter] = useState(15);
  const [onAdd, setOnAdd] = useState(true);
  const [onEdit, setOnEdit] = useState(true);
  const [onDelete, setOnDelete] = useState(true);
  const [displayObjectSize, setDisplayObjectSize] = useState(true);
  const [enableClipboard, setEnableClipboard] = useState(true);
  const [theme, setTheme] = useState("monokai");
  const [iconStyle, setIconStyle] = useState("triangle");
  const [collapsed, setCollapsed] = useState(false);
  const [indentWidth, setIndentWidth] = useState(4);
  const [displayDataTypes, setDisplayDataTypes] = useState(true);

  useEffect(() => {
    getConfigObject({
      collapseStringsAfter,
      onAdd,
      onEdit,
      onDelete,
      displayObjectSize,
      enableClipboard,
      theme,
      iconStyle,
      collapsed,
      indentWidth,
      displayDataTypes,
    });
  }, [
    collapseStringsAfter,
    onAdd,
    onEdit,
    onDelete,
    displayObjectSize,
    enableClipboard,
    theme,
    iconStyle,
    collapsed,
    indentWidth,
    displayDataTypes,
  ]);

  function getThemeInput(theme: any) {
    return (
      <Select
        name="theme-select"
        value={theme}
        options={[
          { value: "apathy", label: "apathy" },
          { value: "apathy:inverted", label: "apathy:inverted" },
          { value: "ashes", label: "ashes" },
          { value: "bespin", label: "bespin" },
          { value: "brewer", label: "brewer" },
          { value: "bright:inverted", label: "bright:inverted" },
          { value: "bright", label: "bright" },
          { value: "chalk", label: "chalk" },
          { value: "codeschool", label: "codeschool" },
          { value: "colors", label: "colors" },
          { value: "eighties", label: "eighties" },
          { value: "embers", label: "embers" },
          { value: "flat", label: "flat" },
          { value: "google", label: "google" },
          { value: "grayscale", label: "grayscale" },
          {
            value: "grayscale:inverted",
            label: "grayscale:inverted",
          },
          { value: "greenscreen", label: "greenscreen" },
          { value: "harmonic", label: "harmonic" },
          { value: "hopscotch", label: "hopscotch" },
          { value: "isotope", label: "isotope" },
          { value: "marrakesh", label: "marrakesh" },
          { value: "mocha", label: "mocha" },
          { value: "monokai", label: "monokai" },
          { value: "ocean", label: "ocean" },
          { value: "paraiso", label: "paraiso" },
          { value: "pop", label: "pop" },
          { value: "railscasts", label: "railscasts" },
          { value: "config-default", label: "config-default" },
          { value: "shapeshifter", label: "shapeshifter" },
          {
            value: "shapeshifter:inverted",
            label: "shapeshifter:inverted",
          },
          { value: "solarized", label: "solarized" },
          { value: "summerfruit", label: "summerfruit" },
          {
            value: "summerfruit:inverted",
            label: "summerfruit:inverted",
          },
          { value: "threezerotwofour", label: "threezerotwofour" },
          { value: "tomorrow", label: "tomorrow" },
          { value: "tube", label: "tube" },
          { value: "twilight", label: "twilight" },
        ]}
        onChange={(val) => {
          setTheme(val);
        }}
      />
    );
  }

  function getIconStyleInput(iconStyle: any) {
    return (
      <Select
        name="icon-style"
        value={iconStyle}
        options={[
          { value: "circle", label: "circle" },
          { value: "square", label: "square" },
          { value: "triangle", label: "triangle" },
        ]}
        onChange={(val) => {
          setIconStyle(val);
        }}
      />
    );
  }

  function getEditInput(onEdit: any) {
    return (
      <Select
        name="enable-edit"
        value={onEdit}
        options={[
          { value: true, label: "true" },
          { value: false, label: "false" },
        ]}
        onChange={(val) => {
          setOnEdit(val);
        }}
      />
    );
  }

  function getAddInput(onAdd: any) {
    return (
      <Select
        name="enable-add"
        value={onAdd}
        options={[
          { value: true, label: "true" },
          { value: false, label: "false" },
        ]}
        onChange={(val) => {
          setOnAdd(val);
        }}
      />
    );
  }

  function getDeleteInput(onDelete: any) {
    return (
      <Select
        name="enable-delete"
        value={onDelete}
        options={[
          { value: true, label: "true" },
          { value: false, label: "false" },
        ]}
        onChange={(val) => {
          setOnDelete(val);
        }}
      />
    );
  }

  function getEnableClipboardInput(enableClipboard: any) {
    return (
      <Select
        name="enable-clipboard"
        value={enableClipboard}
        options={[
          { value: true, label: "true" },
          { value: false, label: "false" },
        ]}
        onChange={(val) => {
          setEnableClipboard(val);
        }}
      />
    );
  }

  function getDataTypesInput(displayDataTypes: any) {
    return (
      <Select
        name="display-data-types"
        value={displayDataTypes}
        options={[
          { value: true, label: "true" },
          { value: false, label: "false" },
        ]}
        onChange={(val) => {
          setDisplayDataTypes(val);
        }}
      />
    );
  }

  function getObjectSizeInput(displayObjectSize: any) {
    return (
      <Select
        name="display-object-size"
        value={displayObjectSize}
        options={[
          { value: true, label: "true" },
          { value: false, label: "false" },
        ]}
        onChange={(val) => {
          setDisplayObjectSize(val);
        }}
      />
    );
  }

  function getIndentWidthInput(indentWidth: any) {
    return (
      <Select
        name="indent-width"
        value={indentWidth}
        options={[
          { value: 0, label: 0 },
          { value: 1, label: 1 },
          { value: 2, label: 2 },
          { value: 3, label: 3 },
          { value: 4, label: 4 },
          { value: 5, label: 5 },
          { value: 6, label: 6 },
          { value: 7, label: 7 },
          { value: 8, label: 8 },
          { value: 9, label: 9 },
          { value: 10, label: 10 },
        ]}
        onChange={(val) => {
          setIndentWidth(val);
        }}
      />
    );
  }

  function getCollapsedInput(collapsed: any) {
    return (
      <Select
        name="collapsed"
        value={collapsed}
        options={[
          { value: true, label: "true" },
          { value: false, label: "false" },
          { value: 1, label: 1 },
          { value: 2, label: 2 },
        ]}
        onChange={(val) => {
          setCollapsed(val);
        }}
      />
    );
  }

  function getCollapsedStringsInput(collapseStringsAfter: any) {
    return (
      <Select
        name="collapse-strings"
        value={collapseStringsAfter}
        options={[
          { value: false, label: "false" },
          { value: 5, label: 5 },
          { value: 10, label: 10 },
          { value: 15, label: 15 },
          { value: 20, label: 20 },
        ]}
        onChange={(val) => {
          setCollapseStringsAfter(val);
        }}
      />
    );
  }

  return (
    <>
      <div className="config-settings">
        <div className="config-input">
          <div className="config-label">Theme:</div>
          {getThemeInput(theme)}
        </div>
        <div className="config-input">
          <div className="config-label">Icon Style:</div>
          {getIconStyleInput(iconStyle)}
        </div>
        <div className="config-input">
          <div className="config-label">Enable Edit:</div>
          {getEditInput(onEdit)}
        </div>
        <div className="config-input">
          <div className="config-label">Enable Add:</div>
          {getAddInput(onAdd)}
        </div>
        <div className="config-input">
          <div className="config-label">Enable Delete:</div>
          {getDeleteInput(onDelete)}
        </div>
        <div className="config-input">
          <div className="config-label">Enable Clipboard:</div>
          {getEnableClipboardInput(enableClipboard)}
        </div>
      </div>

      <div className="config-settings">
        <div className="config-input">
          <div className="config-label">Display Data Types:</div>
          {getDataTypesInput(displayDataTypes)}
        </div>
        <div className="config-input">
          <div className="config-label">Display Object Size:</div>
          {getObjectSizeInput(displayObjectSize)}
        </div>
        <div className="config-input">
          <div className="config-label">Indent Width:</div>
          {getIndentWidthInput(indentWidth)}
        </div>
        <div className="config-input">
          <div className="config-label">Collapsed:</div>
          {getCollapsedInput(collapsed)}
        </div>
        <div className="config-input">
          <div className="config-label">Collapse Strings After Length:</div>
          {getCollapsedStringsInput(collapseStringsAfter)}
        </div>
      </div>
    </>
  );
}
