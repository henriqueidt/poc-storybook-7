pipeline {
    agent any
    tools {nodejs "recent node"}
    stages {
        stage('Checkout code') {
            steps {
                script {
                    checkout scm
                }
            }
        }
        // stage('Create deployment') {
        //     steps {
        //         script {
        //             echo "GitHub Token: ${GITHUB_TOKEN}"
        //             def deployment = sh(script: "curl -X POST -H 'Authorization: token \${GITHUB_TOKEN}' -d '{\"ref\": \"\${GIT_BRANCH}\", \"environment\": \"demo-\${GIT_BRANCH}\"}' https://api.github.com/repos/henriqueidt/poc-storybook-7/deployments", returnStatus: true)
        //             if (deployment != 201) {
        //                 error "Failed to create deployment"
        //             }
        //         }
        //     }
        // }
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'rm -rf node_modules'
                    sh 'npm install'
                }
            }
        }
        // stage('Build Storybook') {
        //     steps {
        //         script {
        //             sh "npm run build-storybook -- -o ./${GIT_BRANCH}"
        //         }
        //     }
        // }
        stage('Create version mark') {
            steps {
                script {
                    sh 'touch ./storybook-static/${GIT_COMMIT}.txt'
                }
            }
        }
        stage('Push to gh-pages') {
            steps {
                script {
                    sh 'git remote set-url origin git@github.com:henriqueidt/poc-storybook-7.git'
                    sh 'git clean  -d  -f .'
                    // sh 'git config --global user.email "henriqueidt@gmail.com"'
                    // sh 'git config --global user.name "Henrique Eidt"'
                    sh 'git checkout gh-pages'
                    sh 'git add .'
                    // sh 'git commit -m "Update gh-pages"'
                    sh 'git push origin gh-pages'
                }
            }
        }
        // stage('Update deployment status') {
        //     steps {
        //         script {
        //             def deploymentId = sh(script: "curl -s -H 'Authorization: token \${GITHUB_TOKEN}' https://api.github.com/repos/henriqueidt/poc-storybook-7/deployments | jq -r '.[] | select(.ref == \"\${GIT_BRANCH}\") | .id'", returnStdout: true).trim()
        //             def status = currentBuild.resultIsBetterOrEqualTo('FAILURE') ? 'failure' : 'success'
        //             sh script: "curl -X POST -H 'Authorization: token \${GITHUB_TOKEN}' -d '{\"state\": \"\${status}\"}' https://api.github.com/repos/henriqueidt/poc-storybook-7/deployments/\${deploymentId}/statuses", returnStatus: true
        //         }
        //     }
        // }
    }
     post{
          always{
               echo "pipeline concluded."
          }
          success{
               echo "all stages executed with success."
          }
     }
}