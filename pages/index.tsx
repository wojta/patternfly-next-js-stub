import React, { useState } from 'react'
import { Bullseye, Button, Dropdown, DropdownItem, DropdownSeparator, DropdownToggle, Wizard } from '@patternfly/react-core'
import { CaretDownIcon } from '@patternfly/react-icons';

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>()
  const [dropdownIsOpen, setIsDropdownOpen] = useState<boolean>();
  const onSelect = (key) => {
    console.log("Item selected ",key)
    setIsDropdownOpen(false);
  }

  const onToggle = dropdownIsOpen => {
    setIsDropdownOpen(dropdownIsOpen)
  };

  const dropdownItems = [
    <DropdownItem key="link">Link</DropdownItem>,
    <DropdownItem key="action" component="button">
      Action
    </DropdownItem>,
    <DropdownItem key="disabled link" isDisabled href="www.google.com">
      Disabled Link
    </DropdownItem>,
    <DropdownItem key="disabled action" isDisabled component="button">
      Disabled Action
    </DropdownItem>,
    <DropdownSeparator key="separator" />,
    <DropdownItem key="separated link">Separated Link</DropdownItem>,
    <DropdownItem key="separated action" component="button">
      Separated Action
    </DropdownItem>
  ];

  const steps = [
    {
      name: 'Step 1', component: <p>Step 1
    <Bullseye>
          <Dropdown onSelect={onSelect} isOpen={dropdownIsOpen}
            dropdownItems={dropdownItems} toggle={
              <DropdownToggle id="toggle-id" onToggle={onToggle} toggleIndicator={CaretDownIcon}>
                Dropdown
          </DropdownToggle>} >
            <DropdownItem>ddd</DropdownItem>
          </Dropdown>
        </Bullseye>
      </p>
    },
    { name: 'Step 2', component: <p>Step 2</p> },
    { name: 'Step 3', component: <p>Step 3</p> },
    { name: 'Step 4', component: <p>Step 4</p> },
    { name: 'Review', component: <p>Review Step</p>, nextButtonText: 'Finish' },
  ]




  return (
    <>
      <Button
        variant="primary"
        onClick={() => setIsOpen(true)}
        style={{ margin: 20 }}
      >
        Show Wizard
      </Button>
      {isOpen && (
        <Wizard
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Simple Wizard"
          description="Simple Wizard Description"
          steps={steps}
        />
      )}
    </>
  )
}
