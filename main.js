//Tiếng anh CNTT 6
const arr = [
    "Bootleg",
    "Cheat",
    "comply",
    "Copy-protection technology",
    "Copyright",
    "Copyright ethic",
    "Creator",
    "Dishonest behavior",
    "Duplicate",
    "Ethical standard",
    "Intellectual property",
    "Integrity",
    "Ownership",
    "Plagiarism",
    "Professional judgement",
    "Public interest",
    "Software copyright",
    "Welfare",
    "Apply for a patent",
    "Be subject to disciplinary action",
    "Comply with",
    "Be deceptive",
    "Defend the principle",
    "Register a trademark",
    "Obey the law",
    "Respect",
    "Take responsibility for",
    "Deal with problems",
    "Unethical",
    "Violate copyright law",
    "Violate the public interest",
    "Withhold information",
    "Alpha testing",
    "Aspect-oriented programming",
    "Beta testing",
    "Boot-loader",
    "Cloud computing",
    "Cloud Computing Infrastructure",
    "Control structure",
    "Documentation",
    "Flow chart",
    "Free trial",
    "Implementation",
    "In-app purchase",
    "Instruction",
    "Language translator",
    "Layout",
    "Maintenance",
    "Object-oriented programming",
    "Premium version",
    "Primitive data",
    "Pseudocode",
    "Requirement Analysis",
    "Sketch",
    "Software development kit",
    "Template",
    "Virtual machine application",
    "Visual diagram",
    "Analyze",
    "Code",
    "Define",
    "Deploy",
    "Formalize",
    "Implement",
    "Maintain",
    "Plan",
    "Prepare",
    "Proofread",
    "Release",
    "Resize",
    "Test",
    "Tweak",
    "BIOS",
    "Basic Input",
    "Output System",
    "Boot drive",
    "CMOS setup",
    "Complementary Metal-Oxide-Semiconductor",
    "Configuration",
    "Default",
    "Device driver",
    "Device manager",
    "Disk cleanup",
    "Expansion card",
    "Installation",
    "Maintenance",
    "Microsoft Drive Optimizer",
    "Modem card",
    "Partition",
    "Rescue disk",
    "Video card",
    "Align",
    "Attach",
    "Back up",
    "Boot",
    "Configure",
    "Defragment",
    "Insert",
    "Maintain",
    "Optimize",
    "Process",
    "Reboot",
    "Secure",
    "Computer code",
  ];

function case_one_character(char, quantity){
    
}

function submitForm(){
    let char = document.getElementById('char').value;
    let quantity = document.getElementById('quantity').value;
    let number_char = char.split('').length
    let list_char = arr.filter((data) => {
        return data.split(' ').length === number_char
    })
    let text_show = []
    if(number_char == 1){
        list_char.forEach((data) => {
            let length_data = data.length
            if(data.toLowerCase().startsWith(char.toLowerCase()) && length_data == quantity){
                text_show.push(data)
            }
        })
    }else{
        list_char.forEach((data) => {
            let arr_data = data.split(' ')
            let result = []
            for(let i in char){
                if(arr_data[i].toLowerCase().startsWith(char[i].toLowerCase())){
                    result.push(arr_data[i])
                }else{
                    break
                }
            }
            if(result.length == number_char && result.join('').length == quantity){
                text_show.push(result.join(' '))
                
            }
        })
    }
    document.getElementById('results1').innerHTML = text_show.join(',')
}