 function removeTags(string) {
     if ((string === null) || (string === ''))
         return false;
     else
         string = string.toString();
     return string.replace(/(<([^>]+)>)/ig, '');
 }
 console.log(removeTags('<p><strong><em>SkillSanta  Assignments</em></strong></p>'));