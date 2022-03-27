import {
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
  ClipboardListIcon,
} from '@heroicons/react/outline'
import { GAME_TITLE } from '../../constants/strings'

type Props = {
  setIsPatchModalOpen: (value: boolean) => void
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({
  setIsPatchModalOpen,
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsSettingsModalOpen,
}: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-content px-5">
        <div className="left-icons">
          <InformationCircleIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
          />
        </div>

        <p className="text-xl ml-2.5 font-bold dark:text-white">{GAME_TITLE}</p>

        <div className="right-icons">
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <CogIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          />
          <ClipboardListIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsPatchModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
