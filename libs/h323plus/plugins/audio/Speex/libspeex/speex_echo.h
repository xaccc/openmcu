/* Copyright (C) Jean-Marc Valin */
/**
   @file speex_echo.h
   @brief Echo cancellation
*/
/*
   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions are
   met:

   1. Redistributions of source code must retain the above copyright notice,
   this list of conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.

   3. The name of the author may not be used to endorse or promote products
   derived from this software without specific prior written permission.

   THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
   IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
   OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT,
   INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
   (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
   SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
   HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
   STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
   ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   POSSIBILITY OF SUCH DAMAGE.
*/

#ifndef SPEEX_ECHO_H
#define SPEEX_ECHO_H

#include "misc.h"

#ifdef __cplusplus
extern "C" {
#endif

/*struct drft_lookup;*/
struct SpeexEchoState_;

typedef struct SpeexEchoState_ SpeexEchoState;

/** Creates a new echo canceller state */
SpeexEchoState *speex_echo_state_init(int frame_size, int filter_length);

/** Destroys an echo canceller state */
void speex_echo_state_destroy(SpeexEchoState *st);

/** Performs echo cancellation a frame */
void speex_echo_cancel(SpeexEchoState *st, short *ref, short *echo, short *out, spx_int32_t *Y);

/** Reset the echo canceller state */
void speex_echo_state_reset(SpeexEchoState *st);

#ifdef __cplusplus
}
#endif

#endif
