function skillsMember(){
    return{
        restrict:'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'va',
        bindToController: true,
        scope:{
            member:'m'
        }
    }
}