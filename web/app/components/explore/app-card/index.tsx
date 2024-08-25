'use client'
import { useTranslation } from 'react-i18next'
import { PlusIcon } from '@heroicons/react/20/solid'
import Button from '../../base/button'
import cn from '@/utils/classnames'
import type { InstalledApp } from '@/models/explore'
import AppIcon from '@/app/components/base/app-icon'
import { AiText, ChatBot, CuteRobote } from '@/app/components/base/icons/src/vender/solid/communication'
import { Route } from '@/app/components/base/icons/src/vender/solid/mapsAndTravel'
import { useRouter } from 'next/navigation'

export type AppCardProps = {
  app: InstalledApp
  onCreate: () => void
  isExplore: boolean
}

const AppCard = ({
  app,
  onCreate,
  isExplore,
}: AppCardProps) => {
  const { t } = useTranslation()
  const router = useRouter()
  const { app: appBasicInfo } = app

  // Verificação e depuração dos dados recebidos
  console.log('AppCard Dados:', app);
  console.log('App Description:', app.app.description);


  const description = app.app.description || "Descrição não disponível";

  return (
    <div className={cn('group flex col-span-1 bg-white border-2 border-solid border-transparent rounded-lg shadow-sm min-h-[160px] flex flex-col transition-all duration-200 ease-in-out cursor-pointer hover:shadow-lg')}>
      <div className='flex pt-[14px] px-[14px] pb-3 h-[66px] items-center gap-3 grow-0 shrink-0'>
        <div className='relative shrink-0'>
          <AppIcon size='large' icon={appBasicInfo.icon} background={appBasicInfo.icon_background} />
          <span className='absolute bottom-[-3px] right-[-3px] w-4 h-4 p-0.5 bg-white rounded border-[0.5px] border-[rgba(0,0,0,0.02)] shadow-sm'>
            {appBasicInfo.mode === 'advanced-chat' && (
              <ChatBot className='w-3 h-3 text-[#1570EF]' />
            )}
            {appBasicInfo.mode === 'agent-chat' && (
              <CuteRobote className='w-3 h-3 text-indigo-600' />
            )}
            {appBasicInfo.mode === 'chat' && (
              <ChatBot className='w-3 h-3 text-[#1570EF]' />
            )}
            {appBasicInfo.mode === 'completion' && (
              <AiText className='w-3 h-3 text-[#0E9384]' />
            )}
            {appBasicInfo.mode === 'workflow' && (
              <Route className='w-3 h-3 text-[#f79009]' />
            )}
          </span>
        </div>
        <div className='grow w-0 py-[1px]'>
          <div className='flex items-center text-sm leading-5 font-semibold text-gray-800'>
            <div className='truncate' title={appBasicInfo.name}>{appBasicInfo.name}</div>
          </div>
          <div className='flex items-center text-[10px] leading-[18px] text-gray-500 font-medium'>
            {appBasicInfo.mode === 'advanced-chat' && <div className='truncate'>{t('app.types.chatbot').toUpperCase()}</div>}
            {appBasicInfo.mode === 'chat' && <div className='truncate'>{t('app.types.chatbot').toUpperCase()}</div>}
            {appBasicInfo.mode === 'agent-chat' && <div className='truncate'>{t('app.types.agent').toUpperCase()}</div>}
            {appBasicInfo.mode === 'workflow' && <div className='truncate'>{t('app.types.workflow').toUpperCase()}</div>}
            {appBasicInfo.mode === 'completion' && <div className='truncate'>{t('app.types.completion').toUpperCase()}</div>}
          </div>
        </div>
      </div>
      
      {/* Exibir a descrição do aplicativo */}
      <div
        className={cn(
          'mb-1 px-[14px] text-xs leading-normal text-gray-500 line-clamp-4 group-hover:line-clamp-2 group-hover:h-9',
          !app.app.description && 'text-red-500' // Destaque para quando a descrição estiver ausente
        )}
        title={app.app.description}
      >
        {app.app.description}
      </div>

      {/* Exibir tags */}
      <div className="px-[14px] pb-2">
        {app.tags && app.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {app.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-lg">
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Botão para abrir o aplicativo instalado */}
      <div className={cn('hidden items-center flex-wrap min-h-[42px] px-[14px] pt-2 pb-[10px] group-hover:flex')}>
        <div className={cn('flex items-center w-full space-x-2')}>
          <Button variant='primary' className='grow h-7' onClick={() => router.push(`/explore/installed/${app.id}`)}>
            <PlusIcon className='w-4 h-4 mr-1' />
            <span className='text-xs'>{t('app.newApp.useTemplate')}</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AppCard
