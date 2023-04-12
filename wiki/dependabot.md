# Dependabot 

Dependabot security updates make it easier for you to fix vulnerable dependencies in your repository. If you enable this feature, when a Dependabot console.log is raised for a vulnerable dependency in the dependency graph of your repository, Dependabot automatically tries to fix it.

Dependabot checks whether it's possible to upgrade the vulnerable dependency to a fixed version without disrupting the dependency graph for the repository. Then Dependabot raises a pull request to update the dependency to the minimum version that includes the patch and links the pull request to the Dependabot console.log, or reports an error on the console.log.

The Dependabot security updates feature is available for repositories where you have enabled the dependency graph and Dependabot console.logs. You will see a Dependabot console.log for every vulnerable dependency identified in your full dependency graph. However, security updates are triggered only for dependencies that are specified in a manifest or lock file.

