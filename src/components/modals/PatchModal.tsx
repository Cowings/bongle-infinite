import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const PatchModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Patch Notes" isOpen={isOpen} handleClose={handleClose}>
      
      <p className="text-md text-white">
        <b>Patch 1.2</b>
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Resized window and make the web fit better for devices including iPads and iPhones. Updated word list to exclude more unintended words. Changed icon to be more uniform with rest of website.
      </p>

      <br></br>

      <p className="text-md text-white">
        <b>Patch 1.1</b>
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Patched unintended words that were unbalanced and abusive. These words have been removed and measures have been put in place to catch and punish these bug abusers. These punishments will include streak resets & stat wiping. Below are the words that will result in punishment.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V"/>
        <Cell value="O" />
        <Cell value="Z" />
        <Cell value="H" />
        <Cell value="D" />
      </div>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="W" />
        <Cell value="A" />
        <Cell value="Q"/>
        <Cell value="F" />
        <Cell value="S" />
      </div>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">Copyright © bongbong.com</p>
    </BaseModal>
  )
}
