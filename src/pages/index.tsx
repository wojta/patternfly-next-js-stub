import React, {useState} from 'react'
import {
    Bullseye,
    Button,
    Divider,
    Dropdown,
    DropdownList,
    DropdownItem,
    MenuToggle, MenuToggleElement,
    Wizard, WizardStep, Modal, ModalVariant, WizardHeader, WizardBody
} from '@patternfly/react-core';

export default function Home() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [dropdownIsOpen, setIsDropdownOpen] = useState<boolean>(false);
    const onSelect = (key: any) => {
        console.log("Item selected ", key)
        setIsDropdownOpen(false);
    }

    const onToggle = () => {
        console.log(`Toggle clicked !${dropdownIsOpen}`)
        setIsDropdownOpen(!dropdownIsOpen)
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
        <Divider key="separator"/>,
        <DropdownItem key="separated link">Separated Link</DropdownItem>,
        <DropdownItem key="separated action" component="button">
            Separated Action
        </DropdownItem>
    ];

    const steps = [
        <WizardStep id="step-1" name="Step 1">
            <Bullseye>
                <Dropdown onSelect={onSelect} isOpen={dropdownIsOpen}
                          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                              <MenuToggle id="toggle-id" ref={toggleRef} isExpanded={dropdownIsOpen}
                                          onClick={onToggle}>
                                  Dropdown
                              </MenuToggle>)}>
                    <DropdownList open={dropdownIsOpen}>
                        {dropdownItems}
                        <DropdownItem>ddd</DropdownItem>
                    </DropdownList>
                </Dropdown>
            </Bullseye>
        </WizardStep>,
        <WizardStep id="step-2" name="Step 2"/>,
        <WizardStep id="step-3" name="Step 3"/>,
        <WizardStep id="review" name="Review" footer={{nextButtonText: 'Finish'}}/>,
    ]

    return (<>
            <Button
                ouiaId="show-wizard"
                variant="primary"
                onClick={() => setIsOpen(true)}
                style={{margin: 20}}
            >Show Wizard</Button>
            <Modal isOpen={isOpen} variant={ModalVariant.large} ouiaId="modal-wizard">
                <Wizard header={
                    <WizardHeader
                        title="Wizard in modal"
                        titleId="wiz-modal-demo-title"
                        description="Simple wizard description"
                        descriptionId="wiz-modal-demo-description"
                        closeButtonAriaLabel="Close wizard"
                        onClose={() => setIsOpen(false)}
                    />}
                        onClose={() => setIsOpen(false)}
                        title="Simple Wizard">
                    {steps}
                </Wizard>
            </Modal>
        </>
    )
}
