#!/bin/bash

#Useage:
# ./add_branch.sh ticket-id name1 name2 name3 ...
#
#./add_branch.sh BS-27 Create Script to Add Branch Automatically
#
#It will create a BS-27-Create-Script-to-Add-Branch-Automatically branch

BRANCH_NAME=$1
REPO_URL='https://github.com/Split-Wise/Uber-Eat-Bot.git'
# Remove $1 from the $@
shift

# Iterate Branch Name
for var in "$@"
do
	BRANCH_NAME=$BRANCH_NAME-$var
done


echo "Start creating branch: $BRANCH_NAME"

# Make sure branch does not exist
<<<<<<< HEAD
exists=$(git show-ref refs/heads/$BRANCH_NAME)
=======
exists=`git show-ref refs/heads/$BRANCH_NAME`
>>>>>>> 298925713b6126b992f93a3be0b1619154ab92f1
if [ -n "$exists" ]; then
	    echo 'branch exists!'
		exit
fi

# Create local branch
git checkout -b $BRANCH_NAME

# Create remote branch
git remote add $BRANCH_NAME $REPO_URL

# Link local branch to remote branch
git push --set-upstream $BRANCH_NAME $BRANCH_NAME

echo "Branch $BRANCH_NAME created!"
