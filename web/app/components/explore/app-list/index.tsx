'use client'

import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { useContext } from 'use-context-selector'
import useSWR from 'swr'
import Toast from '../../base/toast'
import s from './style.module.css'
import cn from '@/utils/classnames'
import ExploreContext from '@/context/explore-context'
import type { App } from '@/models/explore'
import AppCard from '@/app/components/explore/app-card'
import { fetchInstalledAppList } from '@/service/explore'
import Loading from '@/app/components/base/loading'
import { useAppContext } from '@/context/app-context'
import SearchInput from '@/app/components/base/search-input'

type AppsProps = {
  pageType?: PageType
  onSuccess?: () => void
}

export enum PageType {
  EXPLORE = 'explore',
  CREATE = 'create',
}

const Apps = ({
  pageType = PageType.EXPLORE,
  onSuccess,
}: AppsProps) => {
  const { t } = useTranslation()
  const { push } = useRouter()
  const { installedApps, setInstalledApps } = useContext(ExploreContext)
  const [keywords, setKeywords] = useState('')

  const { data: installedAppListData, error: installedAppListError } = useSWR(
    ['/explore/installed-apps'],
    fetchInstalledAppList, // Pegando a lista de apps instalados
    {
      fallbackData: {
        installed_apps: [],
      },
      onSuccess(data) {
        setInstalledApps(data.installed_apps)
      }
    },
  )

  const filteredList = useMemo(() => {
    if (!keywords) return installedApps
    return installedApps.filter(app => app.app.name.toLowerCase().includes(keywords.toLowerCase()))
  }, [keywords, installedApps])

  const handleKeywordsChange = (value: string) => {
    setKeywords(value)
  }

  if (!installedApps || installedApps.length === 0) {
    return (
      <div className="flex h-full items-center">
        <Loading type="area" />
      </div>
    )
  }

  return (
    <div className={cn(
      'flex flex-col',
      pageType === PageType.EXPLORE ? 'h-full border-l border-gray-200' : 'h-[calc(100%-56px)]',
    )}>
      {pageType === PageType.EXPLORE && (
        <div className='shrink-0 pt-6 px-12'>
          <div className={`mb-1 ${s.textGradient} text-xl font-semibold`}>{t('explore.apps.title')}</div>
          <div className='text-gray-500 text-sm'>{t('explore.apps.description')}</div>
        </div>
      )}
      <div className={cn(
        'flex items-center justify-between mt-6',
        pageType === PageType.EXPLORE ? 'px-12' : 'px-8',
      )}>
        <SearchInput value={keywords} onChange={handleKeywordsChange}/>
      </div>

      <div className={cn(
        'relative flex flex-1 pb-6 flex-col overflow-auto bg-gray-100 shrink-0 grow',
        pageType === PageType.EXPLORE ? 'mt-4' : 'mt-0 pt-2',
      )}>
        <nav
          className={cn(
            s.appList,
            'grid content-start shrink-0',
            pageType === PageType.EXPLORE ? 'gap-4 px-6 sm:px-12' : 'gap-3 px-8  sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4',
          )}>
          {filteredList.map(app => (
            <AppCard
              key={app.id} // Use app.id aqui
              isExplore={pageType === PageType.EXPLORE}
              app={app}
              onCreate={() => push(`/explore/installed/${app.id}`)} // Navega para o aplicativo instalado usando app.id
            />
          ))}
        </nav>
      </div>
    </div>
  )
}

export default React.memo(Apps)
