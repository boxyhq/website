import React from 'react';
import Layout from '@theme/Layout';
import TitleHeader from '../components/TitleHeader';

const title = 'BoxyHQ pledges to keep our core open-source code open';
const description = 'BoxyHQ pledges to keep our core open-source code open';

function Team() {
  return (
    <Layout title={title} description={description}>
      <main className="container margin-vert--lg">
        <TitleHeader title={title} />
        <p>
          As long-time users and contributors to the open-source ecosystem, we
          want to do the right thing for the community. That means we will make
          sure that our core open-source code stays open. We will also strive to
          use open standards where possible. We want to collaborate with the
          community to build towards our vision to make security, compliance and
          privacy easy for developers so they can focus on their core product
          while being compliant.
        </p>
        <p>
          BoxyHQ will need to have a viable way of making money soon since we
          are a commercial company at the end of the day. But we’d like to do
          this without having to do things that alienate our community, like
          removing or blocking previously free and open features. We will
          separate the Enterprise features from the open features with
          intentionality, transparency and community inclusion in our
          decision-making logic – focused on building Enterprise products that
          are built to address complex, production-sensitive requirements, and
          keeping the vast majority of end-user empowering capabilities in the
          upstream open-source project. We will also do our best to be
          transparent about which features are free and open source, and which
          are not.
        </p>
        <p>
          Of course, open-source code sometimes becomes obsolete. So, it can
          stay open source but not viable. If we ever need to stop maintaining a
          release of our open-source code, we will work with the community to
          transition it to another maintainer. But in any case, we won’t stop
          maintaining our open-source code without giving the community
          reasonable notice of the transition. And we will do our best to
          maintain backward compatibility for our enterprise features for a
          reasonable lifespan.
        </p>
        <p>
          We hope this pledge will give you peace of mind when using our
          technologies. We do not want to put you at risk of becoming locked in
          with us. We instead want you to happily and thoughtfully choose to
          join our community, contribute to our projects, use our technologies,
          and also buy from us in the future because of the value we provide and
          not out of compulsion because you were left with no other choice.
        </p>
        <p>Sincerely,</p>
        <p>The BoxyHQ Team</p>

        <p>
          <em>
            * Inspired by{' '}
            <a href="https://www.fermyon.com/open-source-promise">Ferymon</a>
          </em>
          <br></br>
          <em>
            * Thanks to JJ and Heather from OSS Capital for reviewing drafts of
            this post
          </em>
        </p>
      </main>
    </Layout>
  );
}
export default Team;
