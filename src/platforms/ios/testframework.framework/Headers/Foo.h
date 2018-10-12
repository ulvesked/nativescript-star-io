//
//  Foo.h
//  testframework
//
//  Created by Anders Knutsson on 2018-08-10.
//  Copyright © 2018 Anders Knutsson. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Foo : NSObject

@property NSString *foo_var;

- (NSString *)getFoo;
+ (BOOL)test:(NSString *)foo;

@end
