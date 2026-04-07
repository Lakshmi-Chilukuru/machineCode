import { AfterViewInit, Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../service/main.service';
import { SubFormComponent } from './sub-form/sub-form.component';

@Component({
  selector: 'app-rt-Forms',
  templateUrl: './rt-forms.component.html',
  styleUrls: ['rt-forms.component.less'],
})
export class RtFormsComponent implements OnInit,AfterViewInit {
  public isLoginMode = true;
  public isLoading = false;
  public error = '';
  public registerForm!: FormGroup;
  public dynamicList :string[] =['']
  public applicationForm:FormGroup= this.fb.group({
      fName :['',[Validators.required]],
      mName :['',[Validators.required]],
      lName :['',[Validators.required]],
      fullName :['',[Validators.required]],
      isWorking:['',[Validators.required]],
      jobType:['',[Validators.required]],
      isOwnBusiness :['',Validators.required],
      companyDetails: this.fb.group({
        companyName: [''],
        position:[''],
        salary:['']
      }),
      businessDetails:this.fb.group({
        businessType:[''],
        businessName:[''],
        annualIncome:[''],
        address:['']
      }),
      personalEmail:['',Validators.required],
      businessEmail:['',Validators.required],
      contactList: this.fb.array([]),
      bankAccount:this.fb.array([
      ]),
      skillSet :this.fb.array([]),
      studentDetails:this.fb.array([]),
      list :this.fb.array([])
    })
    @ViewChild('container' ,{read:ViewContainerRef}) container!:ViewContainerRef;
  //alpha - /^[a-zA-z]+$/,nums -/^[0-9.]+$/
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private mS:MainService
  ) {
     this.addNewContactForm();
     this.applicationForm.valueChanges.subscribe((val)=>{
      const formValue = this.applicationForm.value;
      const {fName,mName,lName} =formValue;
      const fullName = fName + ' ' + mName+ ' '+ lName;
      // this.applicationForm.get('fullName')?.setValue(fullName,{emitEvent:false})
      this.applicationForm.patchValue({fullName:fullName},{emitEvent:false})
    })
  }
  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.pattern(/^[a-zA-Z ]+$/),
          ],
        ],
        mail: ['', [Validators.required, Validators.email]],
        contact: ['', [Validators.required, Validators.pattern(/^[0-9.]+$/)]],
        password: ['', [Validators.required]],
        confirmPassword: ['', Validators.required],
        skills: this.fb.array([]),
      },
      { validators: this.passwordValidator },
    );
    this.listData()
   
  }
  ngAfterViewInit(): void {
    this.applicationForm.valueChanges.subscribe(res=>{
      const formValue = this.applicationForm.value;
      const {jobType} = formValue;
       if(jobType == 'salaried'){
        this.container.clear();
        const data = this.container.createComponent(SubFormComponent)
        this.applicationForm.get('companyDetails.companyName')?.setValidators(Validators.required);
        this.applicationForm.get('companyDetails.position')?.setValidators(Validators.required);
        this.applicationForm.get('companyDetails.salary')?.setValidators(Validators.required);
       }
       if(jobType == 'business'){
        this.applicationForm.get('businessDetails.businessType')?.setValidators(Validators.required);
        this.applicationForm.get('businessDetails.businessName')?.setValidators(Validators.required);
        this.applicationForm.get('businessDetails.annualIncome')?.setValidators(Validators.required);
        this.applicationForm.get('businessDetails.address')?.setValidators(Validators.required);
        
      }
    })
  }

  passwordValidator(form: AbstractControl) {
    const pwd = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (!pwd || !confirmPassword || pwd != confirmPassword) {
      return {
        passwordMismatch: true,
      };
    }
    return null;
  }
  addNewContactForm(){
    this.contacts.push(this.fb.control('',Validators.required))
  }

  get skills(): FormArray {
    return this.registerForm.get('skills') as FormArray;
  }
  get contacts():FormArray{
    return this.applicationForm.get('contactList') as FormArray
  }


  get work(){
    return this.applicationForm.get('isWorking')
  }

  get jobT(){
    return this.applicationForm.get('jobType')
  }
  addC(){
    let cnts = this.applicationForm.get('contacs') as FormArray
    this.contacts.push(['',Validators.required]);
  }

  addContact(){
    this.contacts.push(this.fb.control('',Validators.required))
  }
  removeContact(index:number){
    this.contacts.removeAt(index)
  }

  addSkill() {
    this.skills.push(this.fb.control('', Validators.required));
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  //skillSet
  get skillSet():FormArray{
    return this.applicationForm.get('skillSet') as FormArray
  }

  addSkills(){
    const skill = this.fb.group({
      skillName:['',Validators.required],
      experience:['',Validators.required]
    })
    this.skillSet.push(skill)
  }
  removeSkills(i:number){
    this.skillSet.removeAt(i)
  }
  get students():FormArray{
    return this.applicationForm.get('studentDetails') as FormArray
  }
 
  get lists():FormArray{
    return this.applicationForm.get('list') as FormArray
  }
  listData(){
    const list = ["lakshmi","narayana","chilukuru"]
    list.forEach(item=>{
      this.lists.push(
        this.fb.group({
          item:[item]
        })
      )
    })   
  }
  addList(){
    const list = this.fb.group({
      item:['',Validators.required]
    })
    this.lists.push(list)
  }
  removeList(i:number){
    
    this.lists.removeAt(i)
  }
  
  addStudent(){
    const student= this.fb.group({
      stName:['',Validators.required],
      stRoll :['',Validators.required]
    })
    this.students.push(student)
  }
  removeStudent(i:number){
    this.students.removeAt(i)
  }

  onSubmit() {
    console.log(this.applicationForm.value)
    if(this.applicationForm.value.index){
      this.applicationForm.value.index = Number(this.applicationForm.value.index)+1
    }else{
      let index = this.applicationForm.value.index || 0;
      this.applicationForm.value.index = Number(index)+1;
    }
    this.mS.getAppFormDetails(this.applicationForm);
    
    this.router.navigate(['/formData',this.applicationForm.value.index])
    this.applicationForm.reset();
    // if (this.registerForm.invalid) {
    //   return;
    // }
    // console.log(this.registerForm.value);
    // console.log(this.registerForm.value.firstName.trim());
    // this.registerForm.reset();
  }

  addTemplateList(){
    this.dynamicList.push('')
  }
  removeitem(index:number){
    this.dynamicList.splice(index,1)
  }
  onTemplateData(){
    console.log(this.dynamicList)
  }
  trackByIndex(index: number) {
  return index;
}
  

}
