function isNullOrUndefined(val) {
  //return true jika value sama dengan null atau undefined
  return val === null || val === undefined
}

//
function getValueByPath(obj, path, defaultValue) {
  //cek jika object null atau undefined
  if (isNullOrUndefined(obj)) {
    //jika null atau undefined return defaultValue
    return defaultValue
  }
  //split path untuk dilooping
  let pathSplit = path.split('.')
  //set initial return value = null
  let value = null
  for (let p of pathSplit) {
    //cek path obj sampai path yang displit habis
    value = value ? value[p] : obj[p]
    //jika value null atau undefined return default value
    if (isNullOrUndefined(value)) {
      return defaultValue
    }
  }
  
  //return value yg telah dilooping
  return value
}

const perusahaan = {
  nama: 'ABC',
  staffs: [
    {
      nama: 'jhon'
    }
  ]
}

/*
  get value object dari path staffs 
  di index 0 dengan key nama, jika key tidak ditemukan
  return dengan '-'
*/
let namaStaff = getValueByPath(perusahaan, 'staffs.0.nama', '-')
console.log(namaStaff)
//path yang tidak ditemukan menghasilkan '-'
namaStaff = getValueByPath(perusahaan, 'staffs.1.nama', '-')
console.log(namaStaff)

/*
  contoh jika tidak memakai fungsi tersebut 
  maka akan menghasilkan error, yang menyebabkan aplikasi
  crash jika tidak di try/catch
*/
console.log(perusahaan.staffs[1].nama)

