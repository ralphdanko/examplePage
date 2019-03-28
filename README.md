# callstack
Recruitment Task

## Host 
The page is hosted on: http://ralph-danko.atthost24.pl/

## Checklist

- [x] [**required**] Use one of the building tools (Webpack, Gulp, Parcel) - you can use some boilerplates 
- [x] [**required**] Use GIT for versioning 
- [x] [**optional**] Use semantic commit message convention [**optional**]
- [ ] [**optional**] Optimize images loading in a way proposed by you (**optional**)
- [x] [**required**] Implement page based on delivered design file and use semantic, SEO friendly HTML 
- [x] [**required**] Use RWD techniques and mobile-first approach to implement responsive page 
- [x] [**required**] Use one of CSS preprocessors (LESS, SCSS) 
- [x] [**optional**] Use one of class naming convention (BEM, OOCSS, ACSS) 
- [x] [**required**] Implement form with the behaviour described above 
- [x] Form fields validation (choose one)
  - [x] [**required**] before submit **OR** 
  - [x] [**optional**] while user inputs data
      
- [ ] On form submit (choose one)
  - [x] [**required**] print fields values to console **OR** 
  - [ ] [**optional**] send a request to mocked API
- [x] [**optional**] Host the implemented website to provide a preview for reviewers 
- [ ] [**optional**] Integrate automatic release of the page 
- [x] [**required**] Copy this checklist into README file and check mark completed points 

## Known Issues

- Open font Source Sans Pro used instead of Myriad Pro

## Todo

- [ ] add dashed element to service - previously implemented using div, border & flexbox; removed since there was ~10px offset between 1000w & 1900w
- [ ] implement Hamburger Menu


## Form Validation

The form validation should be performed while user inputs data OR before submit. 
Unfortunatelly such implementation could cause bad user experience.
Validating while user inputs data means the fields will be not highlighted if user click "Submit" before start filling out the fields.
From the other hand, it is a good behaviour that email field is verified just after typing the addres.

If needed, it can be quickly changed.
