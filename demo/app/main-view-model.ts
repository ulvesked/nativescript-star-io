/// <reference path="../../src/typings/StarIO.ios.d.ts" />
/// <reference path="../../src/typings/StarIO_Extension.ios.d.ts" />
import { Observable } from 'tns-core-modules/data/observable';
import { StarIOPort, StarIOCommandBuilder, Emulation, AlignmentPosition, CutPaperAction, QrCodeModel, QrCodeLevel, BitmapConverterRotation } from 'nativescript-star-io';

let title = 'Star Micronics Co., Ltd. ';
let text = `is a Japanese multinational electronic components and printer manufacturing company headquartered in Shizuoka, Japan. 

It was founded in 1947 as a precision processor of miniature components, later expanding into automatic lathes, printers, micro audio components, and other fields.
`;
function test() {
  let btmanager = SMBluetoothManagerFactory.getManagerEmulation("BT:StarMicronics", StarIoExtEmulation.EscPosMobile);
  if (btmanager.open() == false) {
    console.log('failed to open BluetoothManager');
    return;
  }
  if (btmanager.loadSetting() == false) {
    console.log('failed to open BluetoothManager');
    btmanager.close();
    return;
  }
  btmanager.deviceName = "My Star Printer";
  if (btmanager.apply()) {
    console.log('Settings saved');
  }
  else {
    console.log('Settings failed');
  }
  btmanager.close();
}


function stringToNSData(s: string) {
  return NSString.stringWithString(s).dataUsingEncoding(NSUTF8StringEncoding);
}

function nsArrayToArray(array: NSArray<any>) {
  let result = [], count = array.count;
  for (let i = 0; i < count; i++) {
    result.push(array.objectAtIndex(i));
  }
}
function trim(s: NSString) {
  return s.toString();
}

export class HelloWorldModel extends Observable {
  printers: any[];
  smport: SMPort;
_port: StarIOPort;
  constructor() {
    super();

  }
  searchPrinters() {

    let printers = StarIOPort.searchPrinter().map(i => i.portName);
    console.log(printers);
    this.set('printers', printers);

  }
  buildCommands() {
    // UIImage *image = [UIImage imageWithData:[NSData dataWithContentsOfURL:[NSURL URLWithString:MyURL]]];

    let image = UIImage.imageWithData(NSData.dataWithContentsOfURL(NSURL.URLWithString("https://www.hvalerfjordcruise.no/templates/nadir/images/logo.png")));

    let builder = StarIOCommandBuilder.createCommandBuilder(Emulation.EscPosMobile);

    builder.beginDocument();
    //  let nsdata = NSString.stringWithString("Hello world\n").dataUsingEncoding(NSASCIIStringEncoding);
    builder.appendAlignment(AlignmentPosition.Center);
    builder.appendInvert(title);
    builder.appendLineFeed(3);
    builder.append(text);
    builder.appendCutPaper(CutPaperAction.PartialCut);    
    builder.appendLineFeed();
    builder.appendQrCode("testing", QrCodeModel.No1, QrCodeLevel.H, 4);
    builder.appendLineFeed();

    builder.appendUnderLine("the end...      ");

    builder.beginPageMode({x: 0, y: 0, width: 30 * 8, height: 30 * 8}, BitmapConverterRotation.Right90);

    builder.append("Rotated 90° right");
    builder.appendLineFeed();

    builder.appendInvert("INVERTED");
    builder.appendLineFeed();

    builder.appendBitmapWithAlignment(image, false, AlignmentPosition.Center);

    builder.endPageMode();

    builder.endDocument();

    return builder;

  }
  searchPrinters_old() {
    let printers = [];
    let result = SMPort.searchPrinter();
    for (let i = 0, len = result.count; i < len; i++) {
      let portInfo: PortInfo = result.objectAtIndex(i);
      console.log('portInfo: ', portInfo);
      printers.push(portInfo.portName);
    }
    console.log(printers);
    //  alert(JSON.stringify(printers));
    this.set('printers', printers);
  }
  buildCommands_old() {
    // UIImage *image = [UIImage imageWithData:[NSData dataWithContentsOfURL:[NSURL URLWithString:MyURL]]];

    let image = UIImage.imageWithData(NSData.dataWithContentsOfURL(NSURL.URLWithString("https://www.hvalerfjordcruise.no/templates/nadir/images/logo.png")));


    let builder = StarIoExt.createCommandBuilder(StarIoExtEmulation.EscPosMobile);
    builder.beginDocument();
    //  let nsdata = NSString.stringWithString("Hello world\n").dataUsingEncoding(NSASCIIStringEncoding);
    builder.appendAlignment(SCBAlignmentPosition.Center);
    builder.appendDataWithInvert(stringToNSData(title));
    builder.appendLineFeed();

    builder.appendData(stringToNSData(text));
    //    builder.appendCutPaper(SCBCutPaperAction.PartialCut);    
    builder.appendLineFeed();
    builder.appendQrCodeDataModelLevelCell(stringToNSData("testing"), SCBQrCodeModel.No1, SCBQrCodeLevel.H, 4);
    builder.appendLineFeed();

    //builder.appendDataWithUnderLine(stringToNSData("the end...      "));

    builder.beginPageModeRotation(CGRectMake(0, 0, 30 * 8, 30 * 8), SCBBitmapConverterRotation.Right90);

    builder.appendData(stringToNSData("Rotated 90° right"));
    builder.appendLineFeed();

    builder.appendDataWithInvert(stringToNSData("INVERTED"));
    builder.appendLineFeed();

    builder.appendBitmapWithAlignmentDiffusionPosition(image, false, SCBAlignmentPosition.Center);

    builder.endPageMode();

    builder.endDocument();

    return builder.commands.copy();

  }
  connectPrinter = (args) => {
    let btn = args.object;
    let portName = trim(btn.text);
    console.log('portName = ' + portName);
    let port = StarIOPort.getPort(portName, "", 10000);
    console.log('getPort succeeded');
    this._port = port;
    //  let ref = new interop.Pointer();
    //  port.beginCheckedBlock(ref, 2);
    try {
      console.log('get commands');
      let cmd = this.buildCommands();
      console.log('cmd = ' + cmd);
      console.log('try writePort');      
      let written = port.writePort(cmd);
      console.log('written = ' + written);
    }
    catch (err) {
      console.log('writePort failed: ' + err);
    }
    // port.endCheckedBlock(ref, 2);
    // console.log(ref);
    // SMPort.releasePort(port);
  }
  connectPrinter_old = (args) => {
    let btn = args.object;
    let portName = trim(btn.text);
    console.log('portName = ' + portName);
    let port = SMPort.getPort(portName, "", 10000);
    console.log('getPort succeeded');
    this.smport = port;
    //  let ref = new interop.Pointer();
    //  port.beginCheckedBlock(ref, 2);
    try {
      console.log('get commands');
      let cmd = this.buildCommands();
      console.log('cmd = ' + cmd);
      console.log('try writePort');
      let bytes = cmd.bytes;
      let nserr = new interop.Reference<NSError>();
      //{0x41, 0x42, 0x43, 0x44, 0x1B, 0x7A, 0x00, 0x1B, 0x64, 0x02};
      let written = port.writePort(bytes, 0, cmd.length);
      console.log('written = ' + written);
    }
    catch (err) {
      console.log('writePort failed: ' + err);
    }
    // port.endCheckedBlock(ref, 2);
    // console.log(ref);
    // SMPort.releasePort(port);
  }
  releasePort = () => {
    SMPort.releasePort(this.smport);
  }
}
