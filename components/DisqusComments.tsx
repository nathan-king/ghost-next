import { DiscussionEmbed } from "disqus-react";

const DisqusComments = ({ post }) => {
  const disqusShortname = "ghost-next-nk";

  const disqusConfig = {
    url: window.location.href,
    identifier: post.id,
    title: post.title,
  };

  console.log(post.id);

  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default DisqusComments;
