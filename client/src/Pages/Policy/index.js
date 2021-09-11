import React from 'react'
import Titles from '../../Components/Titles'
import { Container, Typography } from '@material-ui/core'
import BadgeAvatar from '../../Components/BadgeAvatar'
import Page from '../../Components/Base/Page'

const Policy = () => {
  return (
    <Page title="Privacy & Policy">
      <Titles title="Privacy & Policy" type="h2" />
      <Container>
        <BadgeAvatar title="Kuro" />
        <Typography variant="h4" style={{ fontWeight: 'bold' }}>
          El autor de este blog declara lo siguiente:
        </Typography>
        <Typography variant="h6">
          This Privacy Policy establishes the terms in which kuroDev uses and
          protects the information that is provided by its users when using its
          website. This company is committed to the security of its users' data.
          When we ask you to fill in the fields of personal information with
          which you can be identified, we do so ensuring that it will only be
          used in accordance with the terms of this document. However, this
          Privacy Policy may change over time or be updated, so we recommend and
          emphasize that you continually review this page to ensure that you
          agree with said changes.
        </Typography>
        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
          Information that is collected
        </Typography>
        <Typography variant="h6">
          Our website may collect personal information such as: Name, contact
          information such as your email address and demographic information.
          Likewise, when necessary, specific information may be required to
          process an order or make a delivery or billing.
        </Typography>
        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
          Use of the information collected
        </Typography>
        <Typography variant="h6">
          Our website uses the information in order to provide the best possible
          service, particularly to maintain a register of users, of orders, if
          applicable, and to improve our products and services. It is possible
          that emails will be sent periodically through our site with special
          offers, new products and other advertising information that we
          consider relevant to you or that may provide you with some benefit,
          these emails will be sent to the address you provide and may be
          canceled. anytime. <br /> kuroDev is highly committed to fulfilling
          the commitment to keep your information secure. We use the most
          advanced systems and constantly update them to ensure that there is no
          unauthorized access.
        </Typography>
        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
          Cookies
        </Typography>
        <Typography variant="h6">
          A cookie refers to a file that is sent in order to request permission
          to be stored on your computer. By accepting said file, it is created
          and the cookie then serves to have information regarding web traffic,
          and also facilitates future visits to a website. recurring web. <br />
          Another function that cookies have is that with them the web can
          recognize you individually and therefore provide you with the best
          personalized service on its web. Our website uses cookies to be able
          to identify the pages that are visited and their frequency. This
          information is used only for statistical analysis and then the
          information is permanently deleted. You can delete cookies at any time
          from your computer. However, cookies help to provide a better service
          on the websites, you do not give access to information from your
          computer or from you, unless you want it and provide it directly with{' '}
          <a
            href="https://noticiasatleticodemadrid.es/"
            target="_blank"
            rel="noreferrer"
          >
            news
          </a>
          . You can accept or deny the use of cookies, however most browsers
          automatically accept cookies as it serves to have a better web
          service. You can also change your computer settings to decline
          cookies. If they are declined, you may not be able to use some of our
          services.
        </Typography>
        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
          Links to Third Parties
        </Typography>
        <Typography variant="h6">
          This website may contain links to other sites that may be of interest
          to you. Once you click on these links and leave our page, we no longer
          have control over the site to which you are redirected and therefore
          we are not responsible for the{' '}
          <a
            href="https://plantillaterminosycondicionestiendaonline.com/"
            target="_blank"
            rel="noreferrer"
          >
            terms or privacy
          </a>{' '}
          or the protection of your data on those other third party sites. These
          sites are subject to their own privacy policies, so it is recommended
          that you consult them to confirm that you agree with them.
        </Typography>
        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
          Control of your personal information
        </Typography>
        <Typography variant="h6">
          At any time you can restrict the collection or use of personal
          information that is provided to our website. Every time you are asked
          to fill in a form, such as user registration, you can check or uncheck
          the option to receive information by email. In case you have marked
          the option to receive our newsletter or advertising, you can cancel it
          at any time. <br />
          This company will not sell, transfer or distribute the personal
          information that is collected without your consent, unless required by
          a judge with a court order. <br />
          kuroDev reserves the right to change the terms of this Privacy Policy
          at any time. This privacy <br />
        </Typography>
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
          policy has been generated in{' '}
          <a
            href="https://politicadeprivacidadplantilla.com/"
            target="_blank"
            rel="noreferrer"
          >
            politicadeprivacidadplantilla.com
          </a>
          .
        </Typography>
      </Container>
      <Typography></Typography>
      <Typography></Typography>
      <Typography></Typography>
    </Page>
  )
}
export default Policy
