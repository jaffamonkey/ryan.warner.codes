import React from 'react'
import dayjs from 'dayjs'

import * as S from './styles'
import { Timer, IconCard, ComfyJS } from '../'
import { Time } from '../Icons'

const title = 'The stream title goes here'
const date = dayjs().format('dddd, MMM DD YYYY')

export default () =>
  <S.StreamStarting>
    <ComfyJS />
    <S.Date>{date}</S.Date>
    <S.Title>{title}</S.Title>
    <S.IconCards>
      <a href='https://twitter.com/RyanWarnerCodes'>
        <S.StyledIconCard
          icon={<S.StyledTwitter />}
          text='@RyanWarnerCodes'
        />
      </a>
      <a href='https://rw.codes'>
        <IconCard
          icon={<S.StyledLinkIcon />}
          text='https://rw.codes'
        />
      </a>
    </S.IconCards>
    <S.TimeWrap>
      <Time />
      <Timer />
    </S.TimeWrap>
  </S.StreamStarting>
