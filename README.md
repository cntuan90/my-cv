# My-CV

a small project for my CV

# Technologies

+ client side : Reactjs (Typescript)
+ server side : Golang

# Configuration for zshrc & bash (show branch name color & autocomplete branch)
--------- Bash --------
if [ -f ~/.git-completion.bash ]; then
. ~/.git-completion.bash
fi

parse_git_branch() {
git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ [\1]/'
}
export PS1="\u@\h \W\[\033[01;33m\]\$(parse_git_branch)\[\033[00m\] $ "
---------- ZSHRC --------
COLOR_DEF=$'\e[0m'
COLOR_USR=$'\e[38;5;243m'
COLOR_DIR=$'\e[38;5;197m'
COLOR_GIT=$'\e[38;5;39m'
setopt PROMPT_SUBST
export PROMPT='${COLOR_USR}%n ${COLOR_DIR}%~ ${COLOR_GIT}$(parse_git_branch)${COLOR_DEF} $ '

# Autocomplete git branch
autoload -Uz compinit && compinit
