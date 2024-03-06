import { findChildPath, findParentPath } from "@/shared/utils/parseUtils"
import PostRoute from '@/widgets/postCard/router'

export const titles = new Map<string, string>([
    ["gamesAtChildrenMusicInstruments", "Игры на детских музыкальных инструментах"],
    ["musicalRhythmicActivity", "Музыкально-ритмическая деятельность"],
    ["perception", "Восприятие"],
    ["playfulCreativeActivities", "Игровая и творческая деятельность"],
    ["singing", "Пение"]
])

export const audioTitle = new Map<string, string>([
    ['П.Чайковский «Марш деревянных солдатиков»', 'post2'],
    ['Р. Шуман - «Смелый наездник»', 'post3'],
    ['П.И.Чайковский - «Танец Феи Драже»', 'post4']
]) 

export const AUDIO_URL = (sectionName: string, postName: string) => {
    return 'https://github.com/BlockSplitME/musicTeacherWebsite/raw/master/src/content/sections/' + sectionName + '/audio/' + postName + '.mp3'
}

export const AUDIO_URL_FOR_POST = (path: string) => {
    return AUDIO_URL(findParentPath(path, PostRoute.path)!, findChildPath(path, PostRoute.path)!)
} 