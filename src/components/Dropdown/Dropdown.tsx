import React from 'react';

interface Props {
   activeOption: string | undefined;
   setactiveOption: React.Dispatch<React.SetStateAction<string | undefined>>;
   options: string[];
   placeHolder: string;
}

export const Dropdown: React.FC<Props> = ({ activeOption, setactiveOption, options, placeHolder }) => {
   const [visibleDropdown, setVisibleDropdown] = React.useState<boolean>(false);
   const toggleVisibleDropdown = () => setVisibleDropdown(!visibleDropdown);

   const setOption = (payload: string) => {
      setactiveOption(payload);
      toggleVisibleDropdown();
   };

   const dropdownRef = React.useRef<HTMLDivElement>(null);
   const nonDropdownClick = (event: any) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (!path.includes(dropdownRef.current)) setVisibleDropdown(false);
   };
   React.useEffect(() => {
      document.body.addEventListener('click', nonDropdownClick);
   });

   return (
      <div ref={dropdownRef}>
         <button onClick={toggleVisibleDropdown}>
            <span>{activeOption ? `Selected: ${activeOption}` : placeHolder}</span>
         </button>
         {visibleDropdown ? (
            <ul>
               {options.map((name, index) => (
                  <li onClick={() => setOption(name)} key={name + index}>
                     {name}
                  </li>
               ))}
            </ul>
         ) : undefined}
      </div>
   );
};
