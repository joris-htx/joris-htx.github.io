import { Stack } from '@mui/material'
import { useIntl } from 'react-intl'

import Diploma from '../../Diploma'

const Diplomas = () => {
  const intl = useIntl()
  return (
    <Stack direction="column" gap={3}>
      <Diploma
        title={intl.formatMessage({
          id: 'MainContent.Diploma.Engineer',
          defaultMessage: 'Computer science engineering degree',
        })}
        subtitles={[
          intl.formatMessage({
            id: 'MainContent.Diploma.Engineer.Description',
            defaultMessage: 'Specialization software architecture',
          }),
        ]}
        schoolName="Polytech' Nice Sophia"
        startDate={new Date(2011, 8)}
        endDate={new Date(2014, 6)}
      />

      <Diploma
        title={intl.formatMessage({
          id: 'MainContent.Diploma.Master',
          defaultMessage: 'Master of Computer Science',
        })}
        subtitles={[
          intl.formatMessage({
            id: 'MainContent.Diploma.Master.Description',
            defaultMessage: 'Apprenticeship',
          }),
        ]}
        schoolName="Polytech' Nice Sophia"
        startDate={new Date(2013, 8)}
        endDate={new Date(2014, 9)}
      />

      <Diploma
        title={intl.formatMessage({
          id: 'MainContent.Diploma.DUT',
          defaultMessage: 'Two-year university degree (DUT) in computer science',
        })}
        subtitles={[]}
        schoolName="Université de Nice Sophia Antipolis"
        startDate={new Date(2009, 8)}
        endDate={new Date(2011, 6)}
      />

      <Diploma
        title={intl.formatMessage({
          id: 'MainContent.Diploma.Baccalaureate',
          defaultMessage: 'Scientific baccalaureate',
        })}
        subtitles={[
          intl.formatMessage({
            id: 'MainContent.Diploma.Baccalaureate.Description',
            defaultMessage: 'Specialization in engineering sciences',
          }),
        ]}
        schoolName="Lycée général et technologique de Lorgues"
        startDate={new Date(2009, 6)}
      />
    </Stack>
  )
}
export default Diplomas
