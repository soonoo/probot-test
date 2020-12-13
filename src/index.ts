import { Probot } from "probot";

export = ({ app }: { app: Probot }) => {
  app.on("pull_request.opened", async (context) => {
    console.log(context)
  });

  app.on("pull_request.synchronize", async (context) => {
    console.log(123)
    // const issueComment = context.issue({
    //   body: "Thanks for opening this issue!",
    // });
    // await context.octokit.issues.createComment(issueComment);
  });
};
